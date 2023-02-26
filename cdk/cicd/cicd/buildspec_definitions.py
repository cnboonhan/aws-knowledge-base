demo_buildspec = {
    'version': '0.2',
    'phases': {
        'install': {
            'commands': [
                'echo hello world'
            ]
        },
        'build': {
            'commands': [
                'echo building'
            ]
        }
    },
    'artifacts': {
        'files': [
            '**/*'
        ]
    }
}
