using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignmnet_3
{
    class Task3
    {
        public static void Students_Above_90(List<Candidate> Student) 
        {
            int sum = 0 ;
            double avg = 0.0;
            System.Console.WriteLine("\nNames of Students who scored above 90% in Projects \n ");
            System.Console.WriteLine("<--------------------------------------->\n ");
            for (int i = 0; i < Student.Count; i++)
            {
                sum = Student[i].ProjMarks[0] + Student[i].ProjMarks[1];
                avg = sum / 2;

                if (avg > 60.0) 
                {
                  
                    
                    System.Console.WriteLine(Student[i].name);

                
                }
            }
        
        }
    }
}
