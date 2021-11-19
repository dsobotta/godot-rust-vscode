import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from "fs";

interface ExtensionCopyConfig {
    context: vscode.ExtensionContext;
    src: string;
    dest: string;
}

export class GodotRustProjectGenerator {

    public static generateProjectFiles(context: vscode.ExtensionContext, workspacePath: string): boolean {

        if (workspacePath === undefined) {
            return false;
        }

        let tasksConfig: ExtensionCopyConfig = {
            context: context,
            src: path.join('data', 'tasks.json'),
            dest: path.join(workspacePath, '.vscode/tasks.json')
        };

        let launchConfig: ExtensionCopyConfig = {
            context: context,
            src: path.join('data', 'launch.json'),
            dest: path.join(workspacePath, '.vscode/launch.json')
        };

        if (!GodotRustProjectGenerator.copyFromExtension(tasksConfig)) {
            return false;
        }

        if (!GodotRustProjectGenerator.copyFromExtension(launchConfig)) {
            return false;
        }

        return true;
    }

    private static copyFromExtension(copyConfig: ExtensionCopyConfig): boolean {

        if (copyConfig.context === undefined) {
            return false;
        }

        const srcPath = vscode.Uri.file(copyConfig.context.asAbsolutePath(copyConfig.src)).fsPath;
        fs.copyFileSync(srcPath, copyConfig.dest);

        return true;
    }

}

