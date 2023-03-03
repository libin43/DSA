public class RSLinkedList {
    class Node {
        int data;
        Node next;
        Node (int data){
            this.data = data;
        }
    }
    public Node head = null;
    public Node tail = null;

    public void addNode(int data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
        }
        else{
            tail.next = newNode;
        }
        tail = newNode;
    }

    public void insertBefore(int prevTo,int data){
        Node newNode = new Node(data);
        Node temp = head;
        Node prev = temp;
        if(temp!=null && temp.data == prevTo){
          head = newNode;
          newNode.next = temp;
          return;  
        }
        while(temp !=null && temp.data != prevTo){
             prev = temp;
            temp = temp.next;
        }
        prev.next = newNode;
        newNode.next = temp;
        
    }

    public void insertAfter(int nextTo,int data){
        Node newNode = new Node(data);
        Node temp = head;
    

        while(temp!=null && temp.data!=nextTo){
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;

        if(tail == temp){
            tail = newNode;
            newNode.next = null;
            return;
        }


    }

    public void delete(int data){
        Node temp = head;
        Node prev = head;
        if(temp!=null && temp.data == data){
            head = temp.next;
        }
        while(temp!=null && temp.data !=data){
            prev = temp;
            temp = temp.next;
        }
        if(tail == temp){
            tail = prev;
            prev.next = null;
            return;
        }
        prev.next = temp.next;

    }

    public void removeDuplicates(){ 
        Node currentNode = head;
        while(currentNode!=null){
            Node successor = currentNode.next;

            while(successor!=null && successor.data == currentNode.data){
                successor = successor.next;
            }
            if(tail == successor){
                tail = currentNode;
                tail.next =null;
            }
            currentNode.next = successor;
            currentNode = successor;

        }
    }

   

    public void display(){
        Node temp = head;
        if(temp == null){
            System.out.println("List empty");
            return;
        }
        while(temp != null ){
            System.out.println(temp.data + " "+ temp.next + " "+tail);
            temp = temp.next;
        }
      
    }

    public static void main(String[] args) {
        RSLinkedList list = new RSLinkedList();
    list.addNode(6);
    list.addNode(10);
    list.addNode(5);
    list.addNode(5);
    list.addNode(5);
    list.addNode(8);
    list.addNode(8);
    list.removeDuplicates();
       
        list.display();
    }
}
