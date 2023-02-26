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

backend_buildspec = {
    'version': '0.2',
    'phases': {
        'install': {
            'commands': [
                'echo hello world'
            ]
        },
        'build': {
            'commands': [
                'echo building backend'
            ]
        }
    },
    'artifacts': {
        'files': [
            '**/*'
        ]
    }
}

web_buildspec = {
    'version': '0.2',
    'phases': {
        'install': {
            'commands': [
                'echo hello world'
            ]
        },
        'build': {
            'commands': [
                'echo building web'
            ]
        }
    },
    'artifacts': {
        'files': [
            '**/*'
        ]
    }
}
