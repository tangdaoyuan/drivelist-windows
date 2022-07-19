{
    "targets": [
        {
            "target_name": "drivelist-windows",
            "conditions": [
                ['OS=="win"', {
                    "cflags!": ["-fno-exceptions"],
                    "cflags_cc!": ["-fno-exceptions"],
                    "sources": [
                        "lib/drivelist.cpp",
                        "lib/device-descriptor.cpp",
                        "lib/windows/list.cpp"
                    ],
                    "libraries": [
                        "-lKernel32.lib",
                        "-lShell32.lib",
                        "-lSetupAPI.lib"
                    ],
                    "defines": [
                        "NAPI_VERSION=<(napi_build_version)"
                    ],
                    'include_dirs': [
                        "<!@(node -p \"require('node-addon-api').include\")",
                        "."
                    ],
                    'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
                    "msvs_settings": {
                        "VCLinkerTool": {
                            "SetChecksum": "true"
                        },
                        "VCCLCompilerTool": {
                            "ExceptionHandling": 1,
                            "AdditionalOptions": [
                                "/EHsc"
                            ]
                        }
                    },
                }],
            ]
        }
    ]
}
