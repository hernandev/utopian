// imports.
import { get } from 'lodash-es'

// steem store getters.

// reward fund.
export const rewardFund = ({ rewardFund }) => rewardFund
// dynamic global properties.
export const dynamicProperties = ({ dynamicProperties }) => dynamicProperties
// median feed price.
export const feedPrice = ({ feedPrice }) => feedPrice

// recent claims.
export const recentClaims = ({ rewardFund }) => get(rewardFund, 'recent_claims', 0)
// reward balance.
export const rewardBalance = ({ rewardFund }) => get(rewardFund, 'reward_balance', 0)
// base feed price.
export const baseFeedPrice = ({ feedPrice }) => get(feedPrice, 'base', 0)
