import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, CheckCircle, PlayCircle } from "lucide-react";

const Courses = () => {
  const enrolledCourses = [
    {
      title: "Mindfulness Foundations",
      instructor: "Dr. Ayesha Khan",
      progress: 65,
      lessons: { completed: 13, total: 20 },
      duration: "4 weeks",
      level: "Beginner"
    },
    {
      title: "Advanced Pranayama",
      instructor: "Zara Malik",
      progress: 30,
      lessons: { completed: 6, total: 20 },
      duration: "6 weeks",
      level: "Advanced"
    }
  ];

  const availableCourses = [
    {
      title: "Introduction to Yoga",
      instructor: "Sarah Ahmed",
      lessons: 15,
      duration: "3 weeks",
      level: "Beginner",
      price: "Free"
    },
    {
      title: "Stress Management Techniques",
      instructor: "Dr. Hassan Ali",
      lessons: 12,
      duration: "2 weeks",
      level: "Intermediate",
      price: "Included"
    },
    {
      title: "Meditation Mastery",
      instructor: "Fatima Khan",
      lessons: 25,
      duration: "8 weeks",
      level: "All Levels",
      price: "Included"
    },
    {
      title: "Holistic Wellness",
      instructor: "Ahmed Raza",
      lessons: 18,
      duration: "5 weeks",
      level: "Intermediate",
      price: "Included"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-muted-foreground">
          Continue your learning journey and explore new courses
        </p>
      </div>

      {/* Enrolled Courses */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Continue Learning</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {enrolledCourses.map((course, index) => (
            <Card key={index} className="shadow-soft hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>by {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {course.lessons.completed} of {course.lessons.total} lessons
                    </span>
                    <span className="font-medium text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>

                <Button className="w-full">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Continue Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Available Courses</h2>
          <Button variant="outline">Browse All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCourses.map((course, index) => (
            <Card key={index} className="shadow-soft hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="text-sm font-medium text-primary">{course.price}</span>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>by {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Completed Courses & Certificates</CardTitle>
          <CardDescription>Your learning achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Complete a course to earn your first certificate!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Courses;
