using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignmnet_3
{
    class Task2
    {
        public static void Assign_Project_Marks(List<Candidate> Student) 
        {
            Random rnd = new Random();
            for (int i = 0; i < Student.Count; i++)
            {
                Student[i].ProjMarks[0] = rnd.Next(20, 100);
                Student[i].ProjMarks[1] = rnd.Next(20, 100);
                
            }
        
        }
    }
}
