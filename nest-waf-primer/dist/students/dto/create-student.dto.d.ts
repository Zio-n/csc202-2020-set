import { CreateUserDto } from "src/student-registration/users/dto/create-user.dto";
import { ModeOfEntry } from "src/student-registration/studentRegistration.types";
export declare class CreateStudentDto {
    readonly department: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: ModeOfEntry;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;
    readonly user: CreateUserDto;
}
