function main() {
  return Events({
    from_date: '2018-03-16',
    to_date:   '2018-03-17',
        event_selectors: [
          {event: 'User Action', label: '1', selector:
          'properties["action"] == "aaa" and properties["select"] == "bbb"'}
    ]
  }).groupBy(["name"], mixpanel.reducer.count());
}

