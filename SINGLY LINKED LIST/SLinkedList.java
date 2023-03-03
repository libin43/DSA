public class SLinkedList {
   class Node{
    int data;
    Node next;
    Node(int data){
        this.data = data;
    }
   }
   public Node head =null;
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

   public void delete(int data){

    Node temp =head;
    Node prev = temp;
    if(temp != null && temp.data==data){
        head = temp.next;
        return;
    }
   

    while(temp != null && temp.data != data){
        prev = temp;
        temp = temp.next;
    }
    if(temp == tail){
        tail = prev;
        tail.next = null;
        return;
    }
    prev.next = temp.next;


   }

   public void insertAfter(int nexto, int data){
    Node newNode = new Node(data);
    Node temp = head;
    while(temp != null && temp.data != nexto){
        temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
   }

   public void middleNode(){
    Node fast = head;
    Node slow = head;
    while(fast !=null && fast.next!=null){
        fast = fast.next.next;
        slow = slow.next;
    }
    System.out.println("middle node value is:"+""+slow.data);
   }

   public void removeDuplicates(){
    Node currentNode = head;
   
    
    while(currentNode!=null){
        Node successor = currentNode.next;
       
        while(successor!=null && successor.data==currentNode.data){
          
                successor = successor.next;
          
        }
        currentNode.next = successor;

        if(tail == successor){
            tail = currentNode;
            tail.next =null;
        }

        currentNode = successor;

        

        

    }
   }

   public void display(){
    Node temp = head;
    if(temp == null){
        System.out.println("Empty");
        return;
    }
    while(temp !=null){
        System.out.println(temp.data+"  "+temp.next);
        temp = temp.next;
        
    }
   }


   public static void main(String[] args) {
    SLinkedList list = new SLinkedList();
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
