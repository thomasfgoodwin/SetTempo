/* 'This file is part of MediaMonkey licensed for use under the Ventis Media End User License Agreement, and for the creation of derivative works under the less restrictive Ventis Limited Reciprocal License. See: https://www.mediamonkey.com/sw/mmw/5/Ventis_limited_reciprocal_license.txt' */

// A simple script that sets tempo according to BPM

actions.SetTempo = {
    title: _('SetTempo'),
    hotkeyAble: true,
    icon: 'synchronize',
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {
        var list = await uitools.getSelectedTracklist().whenLoaded();
        if (list.count === 0) {
            return;
        }
		
        var msg = sprintf(_('Are you sure that you want to modify %d files ?'), list.count);
        messageDlg(msg, 'Confirmation', ['btnYes', 'btnNo'], {
            defaultButton: 'btnNo',
            title: _('Set Tempo'),
        }, function (result) {
            if (result.btnID === 'btnYes') {
				list.forEach(function(itm) {
					itm.beginUpdate();
                    if(itm.bpm <= 60) {
                        itm.tempo = "Largo";
                    } else if (itm.bpm <= 66) {
                        itm.tempo = "Larghetto";
                    } else if (itm.bpm <= 76) {
                        itm.tempo = "Adagio";
                    } else if (itm.bpm <= 108) {
                        itm.tempo = "Andante";
                    } else if (itm.bpm <= 120) {
                        itm.tempo = "Moderato";
                    } else if (itm.bpm <= 168) {
                        itm.tempo = "Allegro";
                    } else if (itm.bpm <= 200) {
                        itm.tempo = "Presto";
                    } else {
                        itm.tempo = "Prestissimo";
                    };
					itm.endUpdate();
				});
				list.commitAsync();  
            }
        });                      
    }
}

window._menuItems.editTags.action.submenu.push({
        action: actions.SetTempo,
        order: 20,
        grouporder: 10
});