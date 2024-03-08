export default {
  common: {
    unknown: 'Unknown',
    record_history: 'History',
    settings: 'Settings',
    add: 'Add',
    apply: 'Apply',
    delete: 'Delete',
    cancel: 'Cancel',
    reset: 'Reset',
    confirm: 'Confirm',
  },

  platform_name: {
    DouYu: 'DouYu - 斗鱼',
    Bilibili: 'Bilibili - 哔哩哔哩',
    HuYa: 'HuYa - 虎牙',
    DouYin: 'DouYin - 抖音',
  },

  quality: {
    lowest: 'Lowest',
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    highest: 'Highest',
  },

  recorders: {
    sort: 'Sort',
    filter: 'Filter',
    add_channel: 'Add',
    added_time: 'Added Time',
  },

  recorder: {
    platform: 'Platform',
    channel: 'Channel',
    state: 'State',
    remarks: 'Remarks',
    quality: 'Recording quality',
    stream_priority: 'Video stream priority',
    source_priority: 'Video source priority',
    ffmpeg_args_tip: 'Click to view recording parameters',
    ffmpeg_args: 'FFMPEG recording parameters',
    disable: 'Disable',
    disable_auto_check: 'Disable automatic recording',
    refresh: 'Refresh',
    stop: 'Stop',
    history: 'History',
    state_idle: 'Idle',
    state_recording: 'Recording',
    'state_stopping-record': 'Stopping recording',
  },

  edit: {
    create_title: 'Adding a new recording task',
    edit_title: 'Editing a recording task',
    channel_input_hint:
      'Enter the channel ID or complete URL, and the URL will be automatically parsed into the channel ID when detected',
    quality_input_hint: 'According to the set picture quality, automatically select the appropriate video stream',
    stream_priority_input_hint:
      'When recording, try to select the specified stream in the order of front and back, and ignore the picture quality setting when successful',
    source_priority_input_hint: 'When recording, try to select the specified source in the order of front and back',
    parse_state_parsing: 'Parsing',
    parse_state_error: 'No platform that matches the URL',
    parse_state_parsed: 'Parsing completed',
    waiting_for_parsing: 'Waiting for parsing',
  },

  settings: {
    global_recording_settings: 'Global Recording Settings',
    save_path_rule: 'Save Path Rule',
    spr_alert_title: 'How to use variables in the save path?',
    spr_alert_subtitle: "Wrap the variable name with `{'{}'}` to use it, such as `/path/{'{platform}'}`",
    filed_name: 'Variable Name',
    filed_value: 'Variable Value',
    field_platform_hint: 'The name of the platform being recorded, such as `Bilibili`',
    field_channel_hint: 'The channel id being recorded, such as `196`',
    field_title_hint: 'The title of the channel, such as `Good evening~`',
    field_owner_hint: "The channel owner's name, such as `Xiaoyuan`",
    field_remarks_hint: 'The remarks of the channel, a user-defined value',
    field_year_hint: 'The year when recording starts, such as `2020`',
    field_month_hint: 'The month when recording starts, such as `01`',
    field_date_hint: 'The day when recording starts, such as `15`',
    field_hour_hint: 'The hour when recording starts, such as `23`',
    field_min_hint: 'The minute when recording starts, such as `30`',
    field_sec_hint: 'The second when recording starts, such as `59`',
    ffmpeg_output_args: 'FFMPEG Output Parameters',
    auto_check_and_record: 'Auto Check and Record',
    check_interval: 'Check Interval (ms)',
    app_settings: 'Appliaction Settings',
    default_notice_format: "Channel {'{channelId}'} started recording",
    close_to_tray: 'Close to tray',
    auto_generate_srt: 'Auto generate SRT subtitle file when recording ends',
    auto_remove_empty_record: 'Auto remove 0kb recording records',
    notify_when_record_start: 'Notify when recording starts',
    notice_format: 'Notice content format',
    nf_alert_title: 'How to use variables in the notice content format?',
    nf_alert_subtitle:
      "Wrap the variable name with `{'{}'}` to use it, such as `Channel {'{channelId}'} started recording`",
    debug_mode: 'Debug mode',
    about: 'About',
    version: 'Version',
    open_source: 'Open source',
    feedback: 'Feedback',
    author: 'Author',
    email: 'Email',
  },

  records: {
    record_history: 'Record History',
    clean_invalid_record: 'Clean invalid records',
    note: 'Note',
    clean_invalid_record_tip:
      'This will remove all records of video files that have been deleted, including files before search filtering.',
    search: 'Search',
    field_start_time: 'Recording start time',
    field_end_time: 'Recording end time',
    field_duration: 'Recording duration',
    field_path: 'Path',
    field_action: 'Action',
    file_not_exists: 'File not exists',
    play: 'Play',
    generate_srt: 'Generate SRT subtitle',
    invalid_record_removed: 'A total of {count} invalid records have been removed',
  },
}
