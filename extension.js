const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('mint-lang.runMint', async function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        // 1. Get path from settings
        const config = vscode.workspace.getConfiguration('mint');
        let mintPath = config.get('path');

        // 2. If setting is empty, search current folder
        if (!mintPath) {
            const files = await vscode.workspace.findFiles('**/mint.py', null, 1);
            if (files.length > 0) {
                mintPath = files[0].fsPath;
            }
        }

        // 3. Error if still not found
        if (!mintPath) {
            vscode.window.showErrorMessage("Set your 'Mint Path' in VS Code Settings.");
            return;
        }

        await editor.document.save();
        
        const terminal = vscode.window.activeTerminal || vscode.window.createTerminal("Mint");
        terminal.show();
        terminal.sendText(`python "${mintPath}" "${editor.document.fileName}"`);
        
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;