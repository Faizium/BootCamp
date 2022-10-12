using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignmnet_3
{
   public class Candidate
    {
        String name;
        String City;
        //String Cnic;
        List<Document> Docs;

        Candidate(string nme, string city, List<Document>doc) 
        {
            name = nme;
            //Cnic = nic;
            City = city;
            Docs = doc;
        }
    }
    public class Document
    {

        String name;
        Double Cgpa;
        //String path;
        //String data;
        Document(String nme, Double cgp) 
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
            List<Document> Doc1 = new List<Document>();

            Document d1 = new Document("Bachelor",3.1);
            Candidate cand1 = new Candidate("Mustafa", "Sargodha",);
            //for (int i = 0; i < 15; i++) 
            //{
            

            
            //}

                List<Document> Doc = new List<Document>();

            for(int i = 0; i < Int16.Parse(docsnum); i++)
            {
                 System.Console.WriteLine("Enter Name of the document\n ");
                 string docname = System.Console.ReadLine();

                 System.Console.WriteLine("Enter Marks or Cgpa\n ");
                 string docmarks = System.Console.ReadLine();

            }
            //System.Console.WriteLine("Enter Your Name\n ");
            //string str = System.Console.ReadLine();


            string str = System.Console.ReadLine();
            int Units = Convert.ToInt32(str);
            String Line =Console.ReadLine();
            if (Line == "enter")
            {
                System.Environment.Exit(0);
            }
        }
    }
}
