import { ServerBoard } from './board'
import { GameBase } from '@kenrick95/c4-core/game'
import { ServerPlayer } from './player'
import { MatchId } from '../types'
import { BoardPiece } from '@kenrick95/c4-core'
import { store } from '..'
import { gameEnded } from '../actions'

export class ServerGame extends GameBase<ServerPlayer> {
  matchId: MatchId
  constructor(players: Array<ServerPlayer>, board: ServerBoard, matchId: MatchId) {
    super(players, board)
    this.matchId = matchId
  }
  afterMove() {
    // no-op
  }
  announceWinner(winnerBoardPiece: BoardPiece) {
    super.announceWinner(winnerBoardPiece)
    store.dispatch(gameEnded(this.matchId, winnerBoardPiece))
  }
}