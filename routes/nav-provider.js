var navCounter = 1;

NavProvider = function(){};
NavProvider.prototype.navData = [];

NavProvider.prototype.findAll = function(callback) {
  callback( null, this.navData )
};

NavProvider.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.navData.length;i++) {
    if( this.navData[i]._id == id ) {
      result = this.navData[i];
      break;
    }
  }
  callback(null, result);
};

NavProvider.prototype.save = function(navItems, callback) {
  var nItem = null;

  if( typeof(navItems.length)=="undefined")
    navItems = [navItems];

  for( var i =0;i< navItems.length;i++ ) {
    nItem = navItems[i];
    nItem._id = navCounter++;
    this.navData[this.navData.length]= nItem;
  }
  callback(null, navItems);
};

/* Lets bootstrap with dummy data */
new NavProvider().save([
    {
    	title: 'dataviz'
    	, navItems: [
    		{
    			name: 'borrowers'
    			, text: 'borrowers'
    		}
    		, {
    			name: 'lenders'
    			, text: 'lenders'
    		}
    		, {
    			name: 'site'
    			, text: 'web site'
    		}
    		, {
    			name: 'partners'
    			, text: 'partners'
    		}
    		, {
    			name: 'ecosystem'
    			, text: 'kiva ecosystem'
    		}
    		, {
    			name: 'stories'
    			, text: 'stories from the field'
    		}
    		, {
    			name: 'press'
    			, text: 'press & promotions'
    		}
    		, {
    			name: 'fundraising'
    			, text: 'fundraising'
    		}
    	]
    }
], function(error, navItems){});

exports.NavProvider = NavProvider;