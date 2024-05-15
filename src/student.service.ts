import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IStudent } from './interface/student.interface';
import { StudentModel } from './models/student.model';
import { UpdateStudentModel } from './models/student-update.model';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel:Model<IStudent>){}

  async createStudent(createStudent: StudentModel):Promise<IStudent> {
    const newStudent = await new this.studentModel(createStudent);
    return newStudent.save();
  }

  async updateStudent(studentId: string, updateStudent: UpdateStudentModel): Promise<IStudent> {
    const existingStudent = await this.studentModel.findOneAndUpdate({rollNumber: studentId}, updateStudent, { new: true });
   if (!existingStudent) {
     throw new NotFoundException(`Student #${studentId} not found`);
   }
   return existingStudent;
}

async getAllStudents(): Promise<IStudent[]> {
  const studentData = await this.studentModel.find();
  if (!studentData || studentData.length == 0) {
      throw new NotFoundException('Students data not found!');
  }
  return studentData;
}

async getStudent(studentId: string): Promise<IStudent> {
  const existingStudent = await this.studentModel.findOne({ rollNumber: studentId }).exec();
  if (!existingStudent) {
   throw new NotFoundException(`Student #${studentId} not found`);
  }
  return existingStudent;
}

async deleteStudent(studentId: string): Promise<IStudent> {
  const deletedStudent = await this.studentModel.findOneAndDelete({rollNumber:studentId});
 if (!deletedStudent) {
   throw new NotFoundException(`Student #${studentId} not found`);
 }
 return deletedStudent;
}
}
