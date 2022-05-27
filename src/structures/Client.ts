import { EventEmitter } from 'node:events'
import { validateClient } from '../util/Preconditions'

export class Client extends EventEmitter implements ClientOptions{
    public playMoreThanOne?: boolean
    public defaultTimeout?: number
    public emitEvents?:boolean
    constructor(options?:ClientOptions){
      super()
      this.playMoreThanOne = options?.playMoreThanOne ?? false
      this.defaultTimeout = options?.defaultTimeout  ?? 60000
      this.emitEvents = options?.emitEvents ?? false
      validateClient(this)
    }
}

export interface ClientOptions{
playMoreThanOne?: boolean
defaultTimeout?: number
emitEvents?: boolean
}
