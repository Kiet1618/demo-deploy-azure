import { Controller, Get, Post, Body, BadRequestException, Param } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    async ping() {
        return "Server is running";
    }
}
