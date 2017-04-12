
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Util = imports.misc.util;

let text, button;
function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'media-playback-pause-symbolic',
                             style_class: 'system-status-icon' });

    button.set_child(icon);
    button.connect('button-press-event', _goSleep);

}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}
function _goSleep(){
Util.spawn(['systemctl', 'suspend'])
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
