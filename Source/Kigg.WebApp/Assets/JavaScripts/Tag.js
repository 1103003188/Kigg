﻿var Tag =
{
    init : function()
    {
        $('#tagTabs > ul').tabs (
                                    defaults = {
                                                     navClass: 'sidebar-tabs-nav',
                                                     selectedClass: 'sidebar-tabs-selected',
                                                     unselectClass: 'sidebar-tabs-nav-item',
                                                     panelClass: 'sidebar-tabs-panel',
                                                     hideClass: 'sidebar-tabs-hide'
                                                }
                                );
        $('#tagTabs').show();
    },

    dispose : function()
    {
    }
};