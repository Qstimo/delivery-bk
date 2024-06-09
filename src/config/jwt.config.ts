import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";


export const getJwtConfig = async (
    configServece: ConfigService
):Promise<JwtModuleOptions>=>({
    secret:configServece.get('JWT_SECRET')
})