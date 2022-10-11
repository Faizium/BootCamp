using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignmnet_3
{
   public class Candidate
    {
       public String name;
       public String City;
        //String Cnic;
       public List<Document> Docs;
      // public List<int> ProjMarks = new List<int>(new int [2]);
       public List<int> ProjMarks = new List<int>();

        public Candidate(string nme, string city, List<Document>doc) 
        {
            name = nme;
            //Cnic = nic;
            City = city;
            Docs = doc;
            ProjMarks.Add(0);
            ProjMarks.Add(0);
            //ProjMarks[0] = 0;
            //ProjMarks[1] = 0;
        }
    }
    public class Document
    {

       public String name;
       public Double Cgpa;
        //String path;
        //String data;
        public Document(String nme, Double cgp) 
        {
            name = nme;
            Cgpa = cgp;
        }

    }
     public class Program
    {
        static void Main(string[] args)
        {

            //System.Console.WriteLine("Enter Your Details \n ");
            //System.Console.WriteLine("<------------------>\n ");

            //System.Console.WriteLine("Enter Your Name\n ");
            //string name = System.Console.ReadLine();

            //System.Console.WriteLine("Enter City\n ");
            //string cty = System.Console.ReadLine();

            //System.Console.WriteLine("Enter Your Cnic\n ");
            //string nic = System.Console.ReadLine();

            //System.Console.WriteLine("How many Educational Documents Do you want to Submit\n ");
            //string docsnum = System.Console.ReadLine();
            List<Candidate> Students = new List<Candidate>();
            List<Document> Stu1Docs = new List<Document>();                 //List of Documents
            //List<Document> StuMarks = new List<Document>();  
            
            Document d1 = new Document("Bachelor",3.1);
            Stu1Docs.Add(d1);
            Candidate cand1 = new Candidate("Mustafa", "Sargodha",Stu1Docs);

            List<Document> Stu2Docs = new List<Document>();
            Document d2 = new Document("Bachelor", 2.7);
            Stu2Docs.Add(d2);
            Candidate cand2 = new Candidate("Faizan", "Bahawalnagar", Stu2Docs);

            List<Document> Stu3Docs = new List<Document>();
            Document d3 = new Document("Bachelor", 3.5);
            Stu3Docs.Add(d3);
            Candidate cand3 = new Candidate("Mohsin", "Lahore", Stu3Docs);

            List<Document> Stu4Docs = new List<Document>();
            Document d4 = new Document("Bachelor", 3.5);
            Stu4Docs.Add(d4);
            Candidate cand4 = new Candidate("Mohsin", "Lahore", Stu4Docs);

            List<Document> Stu5Docs = new List<Document>();
            Document d5 = new Document("Bachelor", 3.5);
            Stu5Docs.Add(d5);
            Candidate cand5 = new Candidate("Mohsin", "Lahore", Stu5Docs);

            List<Document> Stu6Docs = new List<Document>();
            Document d6 = new Document("Bachelor", 3.5);
            Stu6Docs.Add(d6);
            Candidate cand6 = new Candidate("Mohsin", "Lahore", Stu6Docs);

            List<Document> Stu7Docs = new List<Document>();
            Document d7 = new Document("Bachelor", 3.5);
            Stu7Docs.Add(d7);
            Candidate cand7 = new Candidate("Mohsin", "Lahore", Stu7Docs);

            List<Document> Stu8Docs = new List<Document>();
            Document d8 = new Document("Bachelor", 3.5);
            Stu8Docs.Add(d8);
            Candidate cand8 = new Candidate("Mohsin", "Lahore", Stu8Docs);

            List<Document> Stu9Docs = new List<Document>();
            Document d9 = new Document("Bachelor", 3.5);
            Stu9Docs.Add(d9);
            Candidate cand9 = new Candidate("Mohsin", "Lahore", Stu9Docs);

            List<Document> Stu10Docs = new List<Document>();
            Document d10 = new Document("Bachelor", 3.5);
            Stu10Docs.Add(d10);
            Candidate cand10 = new Candidate("Mohsin", "Lahore", Stu10Docs);

            List<Document> Stu11Docs = new List<Document>();
            Document d11 = new Document("Bachelor", 3.5);
            Stu11Docs.Add(d11);
            Candidate cand11 = new Candidate("Mohsin", "Lahore", Stu11Docs);

            List<Document> Stu12Docs = new List<Document>();
            Document d12 = new Document("Bachelor", 3.5);
            Stu12Docs.Add(d12);
            Candidate cand12 = new Candidate("Mohsin", "Lahore", Stu12Docs);

            List<Document> Stu13Docs = new List<Document>();
            Document d13 = new Document("Bachelor", 3.5);
            Stu13Docs.Add(d13);
            Candidate cand13 = new Candidate("Mohsin", "Lahore", Stu13Docs);

            List<Document> Stu14Docs = new List<Document>();
            Document d14 = new Document("Bachelor", 3.5);
            Stu14Docs.Add(d14);
            Candidate cand14 = new Candidate("Mohsin", "Lahore", Stu14Docs);

            List<Document> Stu15Docs = new List<Document>();
            Document d15 = new Document("Bachelor", 3.5);
            Stu15Docs.Add(d15);
            Candidate cand15 = new Candidate("Mohsin", "Lahore", Stu15Docs);


            Students.Add(cand1);
            Students.Add(cand2);
            Students.Add(cand3);

            Students.Add(cand4);
            Students.Add(cand5);
            Students.Add(cand6);

            Students.Add(cand7);
            Students.Add(cand8);
            Students.Add(cand9);

            Students.Add(cand10);
            Students.Add(cand11);
            Students.Add(cand12);

            Students.Add(cand13);
            Students.Add(cand14);
            Students.Add(cand15);
            //for (int i = 0; i < 15; i++) 
            //{

            Task1.Selected_Candidate(Students);
            Task2.Assign_Project_Marks(Students);
            Task3.Students_Above_90(Students);
            //}

              

            //for(int i = 0; i < Int16.Parse(docsnum); i++)
            //{
            //     System.Console.WriteLine("Enter Name of the document\n ");
            //     string docname = System.Console.ReadLine();

            //     System.Console.WriteLine("Enter Marks or Cgpa\n ");
            //     string docmarks = System.Console.ReadLine();

            //}
            //System.Console.WriteLine("Enter Your Name\n ");
            //string str = System.Console.ReadLine();


            String Line = System.Console.ReadLine();
           
            
            if (Line == "enter")
            {
                System.Environment.Exit(0);
            }
        }
    }
}
