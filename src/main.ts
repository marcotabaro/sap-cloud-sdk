import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');
xsenv.loadEnv();
console.log(process.env.PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    passport.use(new JWTStrategy(xsenv.cfServiceCredentials({ tag: 'xsuaa' })));
  } catch (e) {
    console.log(e);
  }
  app.use(passport.initialize());
  app.use(passport.authenticate('JWT', {session: false}));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
