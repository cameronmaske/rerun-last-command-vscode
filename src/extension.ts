"use strict";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("activate rerun-last-command");

  let disposable = vscode.commands.registerCommand(
    "extension.rerunLastCommand",
    () => {
      if (vscode.window.activeTerminal) {
        console.log("Repeating last command");
        let repeatCmd =
          vscode.workspace.getConfiguration("rerun").get<string>("command") ||
          "!!";
        vscode.window.activeTerminal.sendText(repeatCmd, true);
        vscode.window.activeTerminal.sendText("", true);
      } else {
        console.log("No active terminal");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
