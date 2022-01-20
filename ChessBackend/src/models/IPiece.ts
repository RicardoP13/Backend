export default interface IPiece {
  type: String;
  color: String;
  position: Array<number>;
  status: boolean;

  validMoves(board: any): Array<any>;
  validateMove(new_position: Array<number>, board: any): boolean;
}