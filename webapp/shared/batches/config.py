from dynaconf import Dynaconf

settings = Dynaconf(
    settings_files=[
        # 'shared/batches/default.toml',
        'default.toml',
    ]
)
