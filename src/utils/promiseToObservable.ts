import { Observable } from "apollo-link"

export function promiseToObservable<P>(promise: Promise<P>) {
  return new Observable<P>((subscriber) => {
    promise
      .then((value) => {
        if (subscriber.closed) {
          return
        }

        subscriber.next(value)
        subscriber.complete()
      })
      .catch((err) => {
        subscriber.error(err)
      })
  })
}
