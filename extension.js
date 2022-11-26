// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const window = vscode.window
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "helloworld-minimal-sample" is now active!');

	vscode.window.showInformationMessage('Hello World!');


	const log = window.createOutputChannel('my-sample')

	const provider2 = vscode.languages.registerCompletionItemProvider(
		['plaintext','vue'],
		{
			provideCompletionItems() {
				log.appendLine('my completion')
				return [
					new vscode.CompletionItem('my-completion1', vscode.CompletionItemKind.Text),
					new vscode.CompletionItem('my-completion2', vscode.CompletionItemKind.Text),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
