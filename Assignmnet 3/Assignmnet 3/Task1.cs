using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignmnet_3
{
    class Task1
    {
        public static void Selected_Candidate(List<Candidate> Students)
        {
            
            for(int i = 0; i < Students.Count; i++)
            {
                if (Students[i].Docs[0].Cgpa < 3.0) 
                {
                    Students.Remove(Students[i]);
                
                }
            }
            System.Console.WriteLine("Names of Sucessfull Students \n ");
            for (int i = 0; i < Students.Count; i++)
            {
                
                

                 System.Console.WriteLine(Students[i].name);
                 

            }

        }
    }
}
