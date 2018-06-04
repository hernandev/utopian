// steem store mutations.

// set reward fund.
export const setRewardFund = (state, fund) => {
  state.rewardFund = fund
}

// dynamic global properties.
export const setDynamicProperties = (state, properties) => {
  state.dynamicProperties = properties
}

// median feed price.
export const setFeedPrice = (state, feedPrice) => {
  state.feedPrice = feedPrice
}
