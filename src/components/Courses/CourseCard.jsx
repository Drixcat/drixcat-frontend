import { StarIcon } from "@heroicons/react/24/solid";
export default function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:scale-105 flex flex-col h-full">
            <div className="aspect-w-16 aspect-h-9">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="object-cover w-full h-full rounded-t-2xl rounded-b-xl"
                />
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">{course.title}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`h-5 w-5 ${
                                    i < Math.floor(course.rating) ? "fill-yellow-400" : "fill-gray-200"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium ml-1">{course.rating}</span>
                </div>
                <div className="text-primary-600 font-bold text-lg mb-3"></div>
               
                <div className="flex justify-between text-xs text-gray-500 mt-auto">
                    <span>{course.lessons} Lessons</span>
                    <span>{course.students} Students</span>
                </div>
            </div>
        </div>
    );
}