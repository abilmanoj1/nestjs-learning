import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentModel } from './models/student.model';
import { UpdateStudentModel } from './models/student-update.model';
import { AuthGuard } from './auth/auth.guard';

@Controller('student')
@UseGuards(AuthGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  @UsePipes(new ValidationPipe())
   async createStudent(@Res() response, @Body() createStudent: StudentModel) {
  try {
    const newStudent = await this.studentService.createStudent(createStudent);
    return response.status(HttpStatus.CREATED).json({
    message: 'Student has been created successfully',
    newStudent,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    message: 'Error: Student not created!',
    error: 'Bad Request'
 });
 }
}

@Put('/:id')
@UsePipes(new ValidationPipe())
async updateStudent(@Res() response,@Param('id') studentId: string,
@Body() updateStudent: UpdateStudentModel) {
  try {
   const existingStudent = await this.studentService.updateStudent(studentId, updateStudent);
  return response.status(HttpStatus.OK).json({
  message: 'Student has been successfully updated',
  existingStudent,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Get()
async getStudents(@Res() response) {
try {
  const studentData = await this.studentService.getAllStudents();
  return response.status(HttpStatus.OK).json({
  message: 'All students data found successfully',studentData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}

@Get('/:id')
@UsePipes(new ValidationPipe())
async getStudent(@Res() response, @Param('id') studentId: string) {
 try {
    const existingStudent = await
this.studentService.getStudent(studentId);
    return response.status(HttpStatus.OK).json({
    message: 'Student found successfully',existingStudent,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Delete('/:id')
@UsePipes(new ValidationPipe())
async deleteStudent(@Res() response, @Param('id') studentId: string)
{
  try {
    const deletedStudent = await this.studentService.deleteStudent(studentId);
    return response.status(HttpStatus.OK).json({
    message: 'Student deleted successfully',
    deletedStudent,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }

}
