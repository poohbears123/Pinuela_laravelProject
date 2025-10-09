<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Course;

class StudentController extends Controller
{
    private function validationRules($studentId = null)
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students,email' . ($studentId ? ',' . $studentId : ''),
            'phone' => 'required|string|max:15',
            'birthdate' => 'required|date',
        ];
    }

    public function index()
    {
       $students = Student::latest()->get();
       $totalStudents = Student::count();
       $activeCourses = Course::where('active', true)->count();
       $enrollmentRate = $totalStudents > 0 ? round(($students->count() / $totalStudents) * 100) : 0;

       return view('dashboard', compact('students', 'totalStudents', 'activeCourses', 'enrollmentRate'));
    }

    public function store(Request $request)
    {
       $validate = $request->validate($this->validationRules());

        Student::create($validate);

        return redirect()->back()->with('success', 'Student created successfully.');
    }

    public function update(Request $request, Student $student)
    {
        $validate = $request->validate($this->validationRules($student->id));

        $student->update($validate);

        return redirect()->back()->with('success', 'Student updated successfully.');
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->back()->with('success', 'Student deleted successfully.');
    }
}
