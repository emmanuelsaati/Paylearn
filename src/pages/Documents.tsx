import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Download, Upload, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Documents = () => {
  const { toast } = useToast();

  const documents = [
    {
      id: "1",
      name: "Admission Letter",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2023-05-10",
      status: "Verified",
    },
    {
      id: "2",
      name: "ID Card",
      type: "JPG",
      size: "0.8 MB",
      uploadDate: "2023-05-10",
      status: "Verified",
    },
    {
      id: "3",
      name: "Income Statement",
      type: "PDF",
      size: "2.1 MB",
      uploadDate: "2023-05-15",
      status: "Pending",
    },
    {
      id: "4",
      name: "University Fee Structure",
      type: "PDF",
      size: "1.5 MB",
      uploadDate: "2023-05-20",
      status: "Verified",
    },
    {
      id: "5",
      name: "Proof of Residence",
      type: "PDF",
      size: "0.9 MB",
      uploadDate: "2023-05-25",
      status: "Rejected",
    },
  ];

  const handleUpload = () => {
    toast({
      title: "Upload Document",
      description: "Document upload functionality would open here.",
    });
  };

  const handleDownload = (documentName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${documentName}...`,
    });
  };

  const handleView = (documentName: string) => {
    toast({
      title: "View Document",
      description: `Viewing ${documentName}...`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Documents</h1>
          <Button onClick={handleUpload} className="flex items-center gap-2">
            <Upload className="h-4 w-4" /> Upload Document
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Required Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      {doc.name}
                    </TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.size}</TableCell>
                    <TableCell>{doc.uploadDate}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${doc.status === "Verified" ? "bg-green-100 text-green-800" : doc.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                      >
                        {doc.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleView(doc.name)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(doc.name)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Documents;
