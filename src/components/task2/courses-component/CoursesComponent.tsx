import './CoursesComponent.css';
import {coursesAndDurationArray} from "../../../arrays-2.ts";
import {CourseModel} from "../../../models/CourseModel";
import {CourseComponent} from


export const CourseComponent = () => {
    return (
        <div>
            {
                coursesAndDurationArray.map((CourseModel) => {
                    return <CourseComponent/>

                })
            }
        </div>
    );
};

export default CourseComponent;