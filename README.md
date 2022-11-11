## godot-rust-vscode

|  |  |
| --- | --- |
| ![feature X](https://avatars.githubusercontent.com/u/66136469?s=128&v=4) | Extends the functionality provided by [godot-rust](https://godot-rust.github.io/) bindings, with enhanced configuration, workflow, and debugging support |

#
## Features

- Streamlines godot-rust setup for development with vscode
- Synchronizes environment variables across multiple build targets and launchers
- Supports native debugging of godot-rust applications with the usual breakpoints, variable inspection, etc. that one would expect from vanilla rust development
- Minimizes context switching by supporting the entire edit->build->launch->debug workflow within vscode
- Compatible with the [godot-tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools) extension for additional GDScript language and debugging support
  
#
## Setup

1. Follow the godot-rust [getting started](https://godot-rust.github.io/book/getting-started/setup.html) tutorial, and generate a template project
2. Install vscode extensions for best results **( Ctrl+Shift+P )**
    - `ext install matklad.rust-analyzer`
    - `ext install vadimcn.vscode-lldb`
    - `ext install dsobotta.godot-rust-vscode`
3. File **->** Open Folder **->** path-to-your-template-rust-directory
4. Generate project files **( Ctrl+Shift+P )**
    - `>godot-rust: Generate Project Files`
5. Configure godot-rust-vscode settings **( Ctrl+, )**
    - Filter for `godot-rust`
    - Adjust the `godotEditorPath` and `godotProjectPath` settings accordingly
6. Build and debug! **( F5 )**

#
## Usage

- Settings **( Ctrl+, )**
    - `godot-rust.environment.godotEditorPath` - Sets the path to the Godot Editor
    - `godot-rust.environment.godotProjectPath` - Sets the path to the Godot project directory
- Generate Project Files **( Ctrl+Shift+P )
    - `>godot-rust: Generate Project Files` - Populates the tasks.json and launch.json configuration files. 
        >**WARNING - This will clobber existing configurations!**
- Build **( Ctrl+Shift+B )**
    - `godot-rust: Clean` - Removes all artifacts of rust game library and its dependencies
    - `godot-rust: Build Debug` - Builds debug rust game library
    - `godot-rust: Build Release` - Builds release rust game library
    - `godot-rust: Lauch Debug Editor` - Builds debug rust game library, then opens the project with Godot Editor
    - `godot-rust: Launch Release Editor` - Builds release rust game library, then opens the project with Godot Editor
- Debug **( F5 )**
    - `'Debug Game'` - Builds, launches, and begins debugging a *debug* game process
    - `'Release Game'` - Builds, launches, and begins debugging a *release* game process
    - `'Attach to Game'` - Attaches to and begins debugging an *existing* game process. Useful for debugging a game process launched from the Godot Editor


#
## Known Issues

- The project generation offered by this extension **clobbers existing tasks.json and launch.json** configurations. Use at your own risk!
- Project files are not initially configured for cross-compiling or automation, but can be supported by end-users via [custom tasks](https://code.visualstudio.com/docs/editor/tasks#_custom-tasks)
- While there's compatibility with most features in [godot-tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools), each extension brings their own debugger support. Be prepared for some cludgy interactions if you're attempting to debug both rust and GDScript simultaneously
- Not yet tested on OSX

