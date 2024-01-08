import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from 'src/common/interface/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<unknown> {
    // aca se pueden hacer validaciones extras
    if (payload) return payload;
    throw new HttpException(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Bad token',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
