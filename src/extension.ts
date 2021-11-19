
import * as vscode from 'vscode';
import { GodotRustProjectGenerator } from './projectgenerator';

let projectGenerator: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {

	const workspaceRoot = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	if (!workspaceRoot) {
		return;
	}

	console.log('godot-rust plugin loaded.');

	let disposable = vscode.commands.registerCommand('godot-rust.generateProjectFiles', () => {

		if (GodotRustProjectGenerator.generateProjectFiles(context, workspaceRoot)) {
			vscode.window.showInformationMessage('godot-rust: Generated project files.');
		} else {
			vscode.window.showErrorMessage("godot-rust: Working folder not found.  Unable to generate project files.");
		}
	});
	context.subscriptions.push(disposable);

}

export function deactivate() {

}
