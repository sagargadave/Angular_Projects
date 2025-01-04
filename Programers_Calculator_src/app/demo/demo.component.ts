import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [FormBuilder,Validators]
})
export class DemoComponent 
{
  public fbobj = new FormBuilder();
  
  public  selectedButton1 : any;
  public  selectedButton2 : any;
  public  textFieldvalue : string="";
  public  Result : string="0";
  public copybtn : string = "Copy 📋";
  Convert()
  {
    this.copybtn = "Copy 📋";
    
    if(this.selectedButton1 == this.selectedButton2)
    {
      this.Result = "Input value is not correct."
    }
    if(this.selectedButton1 == "Binary" && this.selectedButton2 == "Octal")
    {
      const decimalValue = parseInt(this.textFieldvalue, 2); 
      const octalString = decimalValue.toString(8);   
  
      this.Result = octalString;
    }
    else if(this.selectedButton1 == "Binary" && this.selectedButton2 == "Decimal")
    {
      this.Result = String(parseInt(this.textFieldvalue, 2));
    }
    else if(this.selectedButton1 == "Binary" && this.selectedButton2 == "Hex")
    {
      const decimalValue = parseInt(this.textFieldvalue, 2);
      const hexString = decimalValue.toString(16); 
      this.Result = hexString;
    }
    else if(this.selectedButton1 == "Octal" && this.selectedButton2 == "Binary")
    {
      const decimalValue = parseInt(this.textFieldvalue, 8); 
      const binaryString = decimalValue.toString(2);
      this.Result = binaryString;
    }
    else if (this.selectedButton1 == "Octal" && this.selectedButton2 == "Decimal") 
    {
      this.Result = String(parseInt(this.textFieldvalue, 8));
    }
    else if (this.selectedButton1 == "Octal" && this.selectedButton2 == "Hex") 
    {
      const decimalValue = parseInt(this.textFieldvalue, 8);
      const hexString = decimalValue.toString(16);
      this.Result = hexString;
    }
    else if (this.selectedButton1 == "Decimal" && this.selectedButton2 == "Binary") 
    {
      const decimalValue = parseInt(this.textFieldvalue);
      this.Result = decimalValue.toString(2);
    }
    else if (this.selectedButton1 == "Decimal" && this.selectedButton2 == "Octal") 
    {
      const decimalValue = parseInt(this.textFieldvalue);
      this.Result = decimalValue.toString(8);      
    }
    else if (this.selectedButton1 == "Decimal" && this.selectedButton2 == "Hex") 
    {
      const decimalValue = parseInt(this.textFieldvalue);
      this.Result = decimalValue.toString(16).toUpperCase();            
    }
    else if (this.selectedButton1 == "Hex" && this.selectedButton2 == "Binary") 
    {
      const decimalValue = parseInt(this.textFieldvalue,16);
      this.Result = decimalValue.toString(2);            
    }            
    else if (this.selectedButton1 == "Hex" && this.selectedButton2 == "Octal") 
    {
      const decimalValue = parseInt(this.textFieldvalue,16);
      this.Result = decimalValue.toString(8);            
    }
    else if (this.selectedButton1 == "Hex" && this.selectedButton2 == "Decimal") 
    {
      this.Result = String(parseInt(this.textFieldvalue, 16));      
    }
  }

  copy()
  {
    navigator.clipboard.writeText(this.textFieldvalue);
    this.copybtn = "Copied."
  }
  Clear()
  {
    this.textFieldvalue = "";
  }
}
