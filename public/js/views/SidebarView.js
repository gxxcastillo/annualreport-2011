define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'text!views/sidebarView.hogan']
, function ($, _ ,Backbone, dv, hogan, tpl, undefined) {
	'use strict';

	return Backbone.View.extend({

		el: '#sidebar'

		, events: {
			'click .primaryNav a': 'navClickHandler'
		}


		, navClickHandler: function (event) {
			event.preventDefault();

			// @TODO QUICK HACK


			var sectionId = event.target.getAttribute('href');

			// @todo %HACK% Notifies the controller that this "setActive" is being triggered by a nav click
			dv.navClickTriggered = true;

			this.sections.setActiveById(sectionId);
		}


		/**
		 * @todo we have to return undefined for now as apposed to an empty string as Hogan treats empty string as truthy
		 * @params {Backbone.Model} activeSectionModel
		 *
		 */
		, builPrevNextLink: function (activeSectionModel) {
			this.$next.attr({
				href: prevUrl
				, display: function () {
					return nextUrl ? 'block' : 'none';
				}
			});

			var nextModel = this.sections.next(activeSectionModel);
			return nextModel ? nextModel.id : undefined
		}


		/**
		 *
		 */
		, getPrevNextUrls: function () {
			var activeSection = this.sections.getActive()
			, prev = this.sections.prev(activeSection)
			, next = this.sections.next(activeSection);

			return {
				prev: prev ? prev.id : prev
				, next: next ? next.id : next
			};
		}


		/**
		 * @todo This is not currently used.  Should we have an update function that only replaces elements instead of
		 * re-rendering?  It might make sense in the case of the sidebar as its not very complicated
		 *
		 * @params {String} activeSection
		 */
		, update: function (activeSection) {
			var prevNextUrls = this.getPrevNextUrls();

			// Remove the old active class
			this.$el.find('li.active').removeClass('active');

			// Add the new active class
			$('.nav-' + activeSection.id, this.$el).parent().addClass('active');

			//
			this.$prev.attr({href: prevNextUrls.prev, style: function () {
				return prevNextUrls.prev ?  'display: block' : 'display: none';
			}});
			this.$next.attr({href: prevNextUrls.prev, style: function () {
				return prevNextUrls.next ?  'display: block' : 'display: none';
			}});
		}


		, template: function (data) {
			return hogan.compile(tpl).render(data);
		}


		/**
		 * Responsible for rendering the entire sidebar
		 *
		 * @params {Backbone.Model} [activeSectionModel] Tells the renderer which nav item to show as "active"
		 */
		, render: function (activeSectionModel) {
			activeSectionModel = activeSectionModel || this.sections.getActive() || {};

			var navListData = this.navListData
			, prevNextUrls = this.getPrevNextUrls();

			// Build the view data object
			_.each(navListData, function (navItem) {
				if (navItem.id === activeSectionModel.id) {
					navItem.classname = 'active';
				} else {
					navItem.classname = '';
				}
			});

			// Insert the new content into our view's DOM
			this.$el.html(this.template({
				prevId: prevNextUrls.prev
				, nextId: prevNextUrls.next
				, navItems: navListData
			}));

			this.$prev = this.$('.primaryNav .nav-prev');
			this.$next = this.$('.primaryNav .nav-next');
		}


		, initialize: function (options) {
			var sections = this.sections = options.sections
			, navListData = [];

			_.each(sections.models, function (section, i) {
				navListData[i] = {
					id: section.attributes.id
					, title: section.attributes.title
					, classname: ''
				};
			});

			this.navListData = navListData;
			this.render();
		}
	});
});
