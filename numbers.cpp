#include <iostream>

using namespace std;

int main()
{
    int arraySize;
    cout<<"Set array size: ";
    cin>>arraySize;
    
    int arrayOfNumbers[arraySize],target;
    
    cout<<"Insert array:";
    for(int i=0; i<arraySize; i++)
        cin>>arrayOfNumbers[i];
    
    cout<<"Insert target: ";
    cin>>target;
    
    bool found = false;
    
    for(int i=0; i<arraySize;i++){
        if(!found){
            int tryNumber = arrayOfNumbers[i];
            int searched = target - tryNumber;
            for(int j=0; j<arraySize; j++){
                if(arrayOfNumbers[j] == searched){
                if(tryNumber == searched) 
                    continue;
                cout<<endl<<endl;
                cout<<"First number is "<<tryNumber<<" and it's position is "<< i<<"."<<endl;
                cout<<"Second number is "<<arrayOfNumbers[j]<<" and it's position is "<< j<<"."<<endl;
                found = true;
                break;
                }
            }
        }
    }
    
    if(!found)
        cout<<"Combination not found!"<<endl;

    return 0;
}
