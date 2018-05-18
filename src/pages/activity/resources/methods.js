// import { map, orderBy, last } from 'lodash'
// import * as activities from 'src/database/tables'

export default {
  // stopScrolling () {
  //   this.$refs.infiniteScroll.stop()
  // },
  //
  // restartScrolling () {
  //   // this.$refs.infiniteScroll.resume()
  //   this.$refs.infiniteScroll.reset()
  // },
  //
  // pushResult (record) {
  //   this.history.push(record)
  //
  //   return record
  // },
  //
  // refresher (done) {
  //   // this.history = []
  //   this.restartScrolling()
  //   setTimeout(done, 500)
  // },
  //
  // loadMore (index, done) {
  //   // get model table.
  //   const model = new Activity().table
  //   // define the offset
  //   const offset = (index - 1) * 50
  //
  //   // order by id,desc, 10 itens a time.
  //   const results = model
  //     .orderBy('id')
  //     .reverse()
  //     .offset(offset)
  //     .limit(100)
  //
  //   results.count()
  //     .then(count => {
  //       if (count === 0) {
  //         throw new Error('No more records to load.')
  //       }
  //
  //       return results.each(this.pushResult)
  //     })
  //     .catch(this.stopScrolling)
  //     .finally(done)
  //   // console.log(results.count((a) => a))
  //
  //   // .filter(result => (result.account === 'hernandev'))
  //   // .each(item => this.history.push(item))
  //   // records.toArray().each((record) => {
  //   //   console.log(record)
  //   //   this.history.push(record)
  //   // })
  //
  //   // console.log(records)
  //   // model.table.where('id').between(start, start + 10).then((record) => {
  //   //   // const start = (index - 1) * 10
  //   //   // const page = keys.slice(start, start + 10)
  //   //   // page.map((id) => {
  //   //   //   console.log(model.find('hernandev', id[1]))
  //   //   // })
  //   //   console.log(record)
  //   // })
  //
  //   // console.log(primaryKeySet)
  //
  //   // console.log(primaryKeySet)
  //   // this.$refs.infiniteScroll.stop()
  //   // this.done = true
  //   // let page = await Promise.all(pageKeys.map(id => model.table.get(id)))
  //   //
  //   // if (page.length < PAGE_SIZE)
  //   //
  //   // const query = model.table
  //   //   .orderBy('id')
  //   //   .where('account')
  //   //   .equals('hernandev')
  //   //   .offset((index - 1) * 10)
  //   //   .limit(10)
  //   //
  //   // query.count().then(count => {
  //   //   if (count === 0) {
  //   //     this.$refs.infiniteScroll.stop()
  //   //     this.done = true
  //   //     done()
  //   //   } else {
  //   //     query.each((item) => {
  //   //       this.history.push(item)
  //   //     })
  //   //     done()
  //   //   }
  //   // })
  //   // this.history = model.toArray((data) => {
  //   //   this.history = data
  //   // })
  //   // return this.$steem.account.getHistory('hernandev', this.last, this.limit)
  //   //   .then((data) => {
  //   //     return orderBy(map(data, (entry) => {
  //   //       const item = entry[1]
  //   //       item._id = entry[0]
  //   //       return item
  //   //     }), [ 'timestamp' ], [ 'desc' ])
  //   //   })
  //   //   .then((data) => {
  //   //     map(data, (item) => {
  //   //       model.save('hernandev', get(item, '_id'), item)
  //   //       this.history.push(item)
  //   //     })
  //   //     this.last = get(last(data), '_id')
  //   //     done()
  //   //   })
  // },
  // parseNotifications (history) {
  //   const sorted = orderBy(map(history, (entry) => entry[1]), [ 'timestamp' ], [ 'desc' ])
  //
  //   this.last = last(sorted)
  //
  //   return sorted
  // }
}
