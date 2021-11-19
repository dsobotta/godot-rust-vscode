import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from "fs";

interface CopyConfig {
    context: vscode.ExtensionContext;
    workspace: string;
    src: string;
    dest: string;
}

export class GodotRustProjectGenerator {

    public static generateProjectFiles(context: vscode.ExtensionContext, workspacePath: string): boolean {

        if (workspacePath === undefined) {
            return false;
        }

        let tasksConfig: CopyConfig = {
            context: context,
            workspace: workspacePath,
            src: path.join('templates', 'tasks.json'),
            dest: path.join(workspacePath, '.vscode/tasks.json')
        };

        let launchConfig: CopyConfig = {
            context: context,
            workspace: workspacePath,
            src: path.join('templates', 'launch.json'),
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

    private static copyFromExtension(copyConfig: CopyConfig): boolean {

        if (copyConfig.context === undefined || copyConfig.workspace === undefined) {
            return false;
        }

        const srcPath = vscode.Uri.file(copyConfig.context.asAbsolutePath(copyConfig.src)).fsPath;
        fs.copyFileSync(srcPath, copyConfig.dest);

        return true;
    }

}

