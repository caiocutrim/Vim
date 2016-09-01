[![Build Status](https://travis-ci.org/VSCodeVim/Vim.svg?branch=master)](https://travis-ci.org/VSCodeVim/Vim) [![Slack Status](https://vscodevim-slackin.azurewebsites.net/badge.svg)](https://vscodevim-slackin.azurewebsites.net)

# Vim

VSCodeVim is a [Visual Studio Code](https://code.visualstudio.com/) extension that provides Vim keybindings within Visual Studio Code.

Please **[report missing or buggy features on GitHub](https://github.com/VSCodeVim/Vim/issues)**.

We've added a lot of functionality, but everyone uses Vim in their own special way, so let us know if we're missing your favorite obscure command. :wink:

We're super friendly people if you want to drop by and talk to us on our [Slack channel](https://vscodevim-slackin.azurewebsites.net)!

![Screenshot](images/screen.png)

## Features We Support

* All modes (including visual block mode!)
* Most typical commands, including command combinations like `c3w`, `daw`, `2dd`, etc. (Check the [roadmap](ROADMAP.md) for details.)
* Command remapping (jj to esc)
* Repeating actions with `.`
* Incremental search with `/` and `?` that works like Vim (doesn't just open the search box!)
* Correct undo/redo state
* Marks
* Vim Options

## Roadmap

See our [Github Milestone page](https://github.com/VSCodeVim/Vim/milestones) for an idea of what we plan to implement next.

## Install

1. Within Visual Studio Code, open the command palette (`Ctrl-Shift-P` / `Cmd-Shift-P`)
2. Select `Install Extension` and search for 'vim' *or* run `ext install vim`

## F.A.Q.

#### `j`, `k` and others don't repeat when I hold them down.

On OS X, open Terminal and run the following command:

```
defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
```

#### How can I bind `jj` to `<Esc>`?

1. Add the following to `settings.json` (open the Command Pallete and search for "User Settings"):

   ```
      "vim.insertModeKeyBindings": [
           {
               "before": ["j", "j"],
               "after": ["<Esc>"]
           }
      ]
   ```

2. If you want to press `jj` in modes which are not Insert Mode and still have it trigger `<Esc>`, do the following as well:

   ```
      "vim.otherModesKeyBindings": [
           {
               "before": ["j", "j"],
               "after": ["<Esc>"]
           }
      ]
```

Be sure to restart VSCode after making these changes.

#### How can I bind something like `j` to `gj`? How can I get the equivalent of `:noremap`?

Notice the problem is that if you did this normally, the `j` in `gj` would be expanded into `gj`, on and on forever. To stop this recursive expansion, use vim.otherModesKeyBindingsNonRecursive!

   ```
      "vim.otherModesKeyBindingsNonRecursive": [
           {
               "before": ["j"],
               "after": ["g", "j"]
           }
      ]
```

Don't forget to restart!

#### How can I enable `ctrl-c` or `ctrl-[` as an alternative to `<Esc>`?

Put the following in your `settings.json`:

```    "vim.useCtrlKeys": true```

and restart VSCode.

#### How can I enable `ctrl-f`?

Put the following in your `settings.json`:

```    "vim.useCtrlKeys": true```

and restart VSCode.

#### How can I enable visual block mode with `ctrl-v`?

Put the following in your `settings.json`:

```    "vim.useCtrlKeys": true```

and restart VSCode.

#### How can I enable yanking to system clipboard by default?

Put the following in your `settings.json`:

```    "vim.useSystemClipboard": true```

and restart VSCode.

#### Vim option override sequence.

The way we load Vim options is slightly different from native Vim as there is some overlap between Code and Vim. The option loading sequence is as below.

1. `:set {option}` on the fly
2. [TODO] .vimrc.
2. `vim.{option}` from user settings or workspace settings.
3. VS Code configuration
4. VSCodeVim flavored Vim option default values

## Contributing

This project is maintained by a group of awesome [contributors](https://github.com/VSCodeVim/Vim/graphs/contributors) and contributions are extremely welcome :heart:. If you are having trouble thinking of how you can help, check out our [roadmap](ROADMAP.md).

For a quick tutorial on how to get started, see our [contributing guide](/.github/CONTRIBUTING.md).

## Changelog

Please see our [list of recent releases and features added.](https://github.com/VSCodeVim/Vim/releases)

## License

MIT, please see [License](LICENSE) for more information.
