const DoublyLinkedList = require("./DoublyLinkedList");

describe("DoublyLinkedList", () => {
  describe("#push", () => {
    it("it adds element to the end of an empty list", () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(9);

      expect(doublyLinkedList.head.value).toBe(9);
      expect(doublyLinkedList.tail.value).toBe(9);
      expect(doublyLinkedList.head.prev).toBeNull();
      expect(doublyLinkedList.head.next).toBeNull();
      expect(doublyLinkedList.length).toBe(1);
    });

    it("it adds element ot the end of a non empty list", () => {
      const doublyLinkedList = DoublyLinkedList.fromValues(3, 6, 9, 7);

      expect(doublyLinkedList.head.value).toBe(3);
      expect(doublyLinkedList.head.next.value).toBe(6);
      expect(doublyLinkedList.tail.prev.value).toBe(9);
      expect(doublyLinkedList.tail.value).toBe(7);
    });
  });

  describe("#pop", () => {
    describe("when the list is empty", () => {
      it("it returns message", () => {
        const doublyLinkedList = new DoublyLinkedList();

        const result = doublyLinkedList.pop();

        expect(result).toBe("Empty list: no elments to remove");
      });
    });

    describe("when the list have one element", () => {
      it("it pops last element", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2);

        doublyLinkedList.pop();

        expect(doublyLinkedList.head).toBeNull();
        expect(doublyLinkedList.tail).toBeNull();
      });
    });

    describe("when the list have two elements", () => {
      it("it pops last element", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3);

        doublyLinkedList.pop();

        expect(doublyLinkedList.head.value).toBe(2);
        expect(doublyLinkedList.tail.value).toBe(2);
        expect(doublyLinkedList.tail.next).toBeNull();
        expect(doublyLinkedList.length).toBe(1);
      });
    });

    describe("when the list have more than two elements", () => {
      it("it pops last element", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 7, 8);

        doublyLinkedList.pop();

        expect(doublyLinkedList.head.value).toBe(2);
        expect(doublyLinkedList.tail.value).toBe(7);
        expect(doublyLinkedList.tail.next).toBeNull();
        expect(doublyLinkedList.length).toBe(3);
      });
    });
  });

  describe("#unshift", () => {
    describe("when the list is empty", () => {
      it("it adds the element to the list", () => {
        const doublyLinkedList = new DoublyLinkedList();

        doublyLinkedList.unshift(5);

        expect(doublyLinkedList.head.value).toBe(5);
        expect(doublyLinkedList.tail.value).toBe(5);
        expect(doublyLinkedList.length).toBe(1);
      });
    });

    describe("when the list have elements", () => {
      it("it adds the element at the beginning of list", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 4, 6, 7);

        doublyLinkedList.unshift(1);

        expect(doublyLinkedList.head.value).toBe(1);
        expect(doublyLinkedList.head.next.value).toBe(2);
        expect(doublyLinkedList.head.next.prev.value).toBe(1);
        expect(doublyLinkedList.length).toBe(5);
      });
    });
  });

  describe("#shift", () => {
    describe("when the list is empty", () => {
      it("it returns message", () => {
        const doublyLinkedList = new DoublyLinkedList();

        const result = doublyLinkedList.shift();

        expect(result).toBe("Empty list: no elments to shift");
      });
    });

    describe("when the list has one element", () => {
      it("it removes from list", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(7);

        doublyLinkedList.shift();

        expect(doublyLinkedList.head).toBeNull();
        expect(doublyLinkedList.tail).toBeNull();
        expect(doublyLinkedList.length).toBe(0);
      });
    });

    describe("when the list has more than one element", () => {
      it("it removes the element at the beginning of the list", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(1, 3, 6, 8, 10);

        doublyLinkedList.shift();

        expect(doublyLinkedList.head.value).toBe(3);
        expect(doublyLinkedList.head.prev).toBeNull();
        expect(doublyLinkedList.length).toBe(4);
      });
    });
  });

  describe("#getByIndex", () => {
    describe("when the index is less than 0", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(3, 4, 5);

        const result = doublyLinkedList.getByIndex(-1);

        expect(result).toBeNull();
      });
    });

    describe("when the index is 0", () => {
      it("it returns the head", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(6);

        const result = doublyLinkedList.getByIndex(0);

        expect(result.value).toBe(6);
      });
    });

    describe("when the index is greater than the list", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(1);

        const result = doublyLinkedList.getByIndex(2);

        expect(result).toBeNull();
      });
    });

    describe("when  the index is in the middle", () => {
      it("it returns the element at the head index", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 4, 5);

        const result = doublyLinkedList.getByIndex(2);

        expect(result.value).toBe(4);
      });
    });
  });

  describe("#set", () => {
    describe("when the index is less than 0", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(3, 4, 5);

        const result = doublyLinkedList.set(-1);

        expect(result).toBeNull();
      });
    });

    describe("when the index is 0", () => {
      it("it replace the list head", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(6);

        doublyLinkedList.set(0, 9);

        expect(doublyLinkedList.head.value).toBe(9);
      });
    });

    describe("when the index is greater than the list", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(1);

        const result = doublyLinkedList.set(2);

        expect(result).toBeNull();
      });
    });

    describe("when the index is in the middle", () => {
      it("it replace the element at the head of index", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 4, 5);

        doublyLinkedList.set(2, 7);

        const result = doublyLinkedList.getByIndex(2);

        expect(result.value).toBe(7);
        expect(result.next.value).toBe(5);
        expect(result.prev.value).toBe(3);
        expect(doublyLinkedList.length).toBe(4);
      });
    });
  });

  describe("#removeHead", () => {
    describe("when list is empty", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues();

        const result = doublyLinkedList.removeHead();

        expect(result).toBeNull();
      });
    });

    describe("when list has only one element", () => {
      it("it removes head", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(4);

        doublyLinkedList.removeHead();

        expect(doublyLinkedList.head).toBeNull();
        expect(doublyLinkedList.tail).toBeNull();
        expect(doublyLinkedList.length).toBe(0);
      });
    });

    describe("when list has more than one element", () => {
      it("it removes head", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(1, 2, 3, 4);
        doublyLinkedList.print();

        doublyLinkedList.removeHead();

        doublyLinkedList.print();

        expect(doublyLinkedList.head.value).toBe(2);
        expect(doublyLinkedList.head.prev).toBeNull();
        expect(doublyLinkedList.head.next.value).toBe(3);
        expect(doublyLinkedList.length).toBe(3);
      });
    });
  });

  describe("#insertAtIndex", () => {
    describe("when the index is less than 0", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(3, 4, 5);

        const result = doublyLinkedList.insertAtIndex(-1, 9);

        expect(result).toBeNull();
      });
    });

    describe("when the index is 0", () => {
      it("it insert element at the head", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(6);

        doublyLinkedList.insertAtIndex(0, 8);

        expect(doublyLinkedList.head.value).toBe(8);
        expect(doublyLinkedList.head.next.value).toBe(6);
        expect(doublyLinkedList.head.next.prev.value).toBe(8);
        expect(doublyLinkedList.length).toBe(2);
      });
    });

    describe("when the index is greater than the list", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(1);

        const result = doublyLinkedList.insertAtIndex(2, 9);

        expect(result).toBeNull();
      });
    });

    describe("when  the index is in the middle", () => {
      it("it insert the element between the founded element and next", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 4, 5);

        doublyLinkedList.insertAtIndex(2, 8);

        const result = doublyLinkedList.getByIndex(2);

        expect(result.value).toBe(8);
        expect(result.next.value).toBe(4);
        expect(result.prev.value).toBe(3);
        expect(doublyLinkedList.length).toBe(5);
      });
    });

    describe("when  the index is the last element", () => {
      it("it insert the element at the end of the list", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 4, 5);

        doublyLinkedList.insertAtIndex(4, 8);

        expect(doublyLinkedList.tail.value).toBe(8);
        expect(doublyLinkedList.tail.prev.value).toBe(5);
      });
    });
  });

  describe("#removeAtIndex", () => {
    describe("when the index is less than 0", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(3, 4, 5);

        const result = doublyLinkedList.removeAtIndex(-1);

        expect(result).toBeNull();
      });
    });

    describe("when the index is 0", () => {
      it("it returns null if list length equals 1", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(6);

        const result = doublyLinkedList.removeAtIndex(0);

        expect(result).toBeNull();
      });

      it("it removes head if list has more than one element", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(6, 4);

        doublyLinkedList.removeAtIndex(0);

        expect(doublyLinkedList.head.value).toBe(4);
        expect(doublyLinkedList.length).toBe(1);
      });
    });

    describe("when the index is greater than the list", () => {
      it("it returns null", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(1);

        const result = doublyLinkedList.removeAtIndex(2);

        expect(result).toBeNull();
      });
    });

    describe("when  the index is in the middle", () => {
      it("it removes the element at the head of index", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 4, 5);

        doublyLinkedList.removeAtIndex(2);

        const result = doublyLinkedList.getByIndex(2);

        expect(result.value).toBe(5);
        expect(result.next).toBeNull();
        expect(result.prev.value).toBe(3);
        expect(doublyLinkedList.length).toBe(3);
      });
    });

    describe("when  the index is the last element", () => {
      it("it removes the tail element", () => {
        const doublyLinkedList = DoublyLinkedList.fromValues(2, 3, 4, 5);

        doublyLinkedList.print();

        doublyLinkedList.removeAtIndex(4);

        doublyLinkedList.print();

        expect(doublyLinkedList.tail.value).toBe(4);
        expect(doublyLinkedList.length).toBe(3);
      });
    });
  });
});
