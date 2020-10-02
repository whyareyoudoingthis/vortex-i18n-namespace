import { log } from "vortex-api";
import { IExtensionContext } from 'vortex-api/lib/types/api';

//This is the main function Vortex will run when detecting the game extension. 
function main(context: IExtensionContext) {
    context.once(() => {
        // context.api.getI18n().loadNamespaces(context.api.NAMESPACE);
    });
    context.registerAction('mod-icons', 101, 'smart', {}, 'Base Text', () => {
        context.api.showDialog('info', 'Namespace Test', {text: context.api.translate('This is the base text content', {ns: context.api.NAMESPACE})}, [{label: 'Close'}]);
        return true;
    }, () => true);
    return true;
}

module.exports = {
    default: main,
};