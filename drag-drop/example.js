// Setup the Sencha Touch app.
Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function(){
        // Create a new draggable for the div with an
        // id of 'draggable'
        new Ext.util.Draggable('draggable', {
	    delay: 1000
        });

        // Create a new draggable for the div with an
        // id of 'invalid
        new Ext.util.Draggable('draggable1', {
	    eventTarget: 'selector'
        });


     // Create a new Droppable for the div with an
        // id of 'droppable'
        new Ext.util.Droppable('droppable1', {
            // Change the validDropMode from the default of 'intersect' to
            // 'contains' this ensures that a Draggable must be completed
            // contained by the Droppable in order to perform a drop
            validDropMode: 'contains',
            listeners: {
                drop: function(droppable, draggable, e) {
                    //draggable.el.setHTML('Dropped!');
                }
            }
        });

        // Create a new Droppable for the div with an
        // id of 'droppable'
        new Ext.util.Droppable('droppable', {
            // Change the validDropMode from the default of 'intersect' to
            // 'contains' this ensures that a Draggable must be completed
            // contained by the Droppable in order to perform a drop
            validDropMode: 'contains',
            listeners: {
                drop: function(droppable, draggable, e) {
                    //draggable.el.setHTML('Dropped!');
                }
            }
        });

    }
});
