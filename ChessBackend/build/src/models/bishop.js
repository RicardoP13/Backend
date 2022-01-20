"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bishop {
    constructor(type, color, position, status) {
        this.type = type;
        this.color = color;
        this.position = position;
        this.status = status;
    }
    validMoves(board) {
        const valid_moves = [];
        let x;
        let y;
        let next_box;
        const enemy_color = this.color === "White" ? "B" : "W";
        x = this.position[1];
        y = this.position[0];
        while (x < 7 && y < 7) {
            x++;
            y++;
            next_box = board[y][x];
            if (next_box === 'o' || next_box.substring(0, 1) === enemy_color) {
                valid_moves.push([y, x]);
            }
            if (next_box.substring(0, 1) !== 'o') {
                break;
            }
        }
        x = this.position[1];
        y = this.position[0];
        while (x < 7 && y > 0) {
            x++;
            y--;
            next_box = board[y][x];
            if (next_box === 'o' || next_box.substring(0, 1) === enemy_color) {
                valid_moves.push([y, x]);
            }
            if (next_box.substring(0, 1) !== 'o') {
                break;
            }
        }
        x = this.position[1];
        y = this.position[0];
        while (x > 0 && y < 7) {
            x--;
            y++;
            next_box = board[y][x];
            if (next_box === 'o' || next_box.substring(0, 1) === enemy_color) {
                valid_moves.push([y, x]);
            }
            if (next_box.substring(0, 1) !== 'o') {
                break;
            }
        }
        x = this.position[1];
        y = this.position[0];
        while (x > 0 && y > 0) {
            x--;
            y--;
            next_box = board[y][x];
            if (next_box === 'o' || next_box.substring(0, 1) === enemy_color) {
                valid_moves.push([y, x]);
            }
            if (next_box.substring(0, 1) !== 'o') {
                break;
            }
        }
        return valid_moves;
    }
    validateMove(new_position, board) {
        const valid_moves = this.validMoves(board);
        if (valid_moves.length !== 0) {
            const valid_move = valid_moves.find(move => JSON.stringify(move) === JSON.stringify(new_position));
            return typeof valid_move !== 'undefined';
        }
        return false;
    }
}
exports.default = Bishop;
//# sourceMappingURL=bishop.js.map