"use strict";

import * as vscode from 'vscode';

export async function showInfo(message : string): Promise<{}> {
  return vscode.window.showInformationMessage("Vim: " + message);
}

export async function showError(message : string): Promise<{}> {
  return vscode.window.showErrorMessage("Vim: " + message);
}

export function translateToKeyNotation(key: string): string {
    const keyNotationTranslations = {
      'ctrl+' : 'C-',
      'escape': 'Esc',
      'backspace': 'BS',
      'delete': 'Del',
    };

    let bracketedKey = `<${ key.toLowerCase() }>`;
    for (let searchKey in keyNotationTranslations) {
      bracketedKey = bracketedKey.replace(searchKey, keyNotationTranslations[searchKey]);
    }

    return bracketedKey;
}