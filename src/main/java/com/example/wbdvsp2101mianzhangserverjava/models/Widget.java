package com.example.wbdvsp2101mianzhangserverjava.models;
import javax.persistence.*;

@Entity
@Table(name="widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topicId;
    private Integer widgetOrder;
    private String cssClass;
    private String style;
    private String value;
    private String type;
    private Integer size;
    private Integer width;
    private Integer height;
    private String text;
    private String name;
    private Boolean ordered;
    private String src;


    public Integer getWidgetOrder() {
        return widgetOrder;
    }

    public void setWidgetOrder(Integer widgetOrder) {
        this.widgetOrder = widgetOrder;
    }

    public String getCssClass() {
        return cssClass;
    }

    public void setCssClass(String cssClass) {
        this.cssClass = cssClass;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean getOrdered() {
        return ordered;
    }

    public void setOrdered(Boolean ordered) {
        this.ordered = ordered;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Widget() {
    }

    public Widget(Long id, String topicId, String type, Integer size, String text
//            , Integer widgetOrder, String cssClass,
//                  String style, String value, Integer width, Integer height, String name, Boolean ordered, String src
    ) {
        this.id = id;
        this.topicId = topicId;
        this.type = type;
        this.size = size;
        this.text = text;
//        this.widgetOrder = widgetOrder;
//        this.cssClass = cssClass;
//        this.style = style;
//        this.value = value;
//        this.height = height;
//        this.width = width;
//        this.name = name;
//        this.ordered = ordered;
//        this.src = src;
    }
}


//    private String cssClass;
//    private String style;
//    private String value;
//    private String type;
//    private Integer size;
//    private Integer width;
//    private Integer height;
//    private String text;
//    private String name;
//    private Boolean ordered;
//    private String src;

//package com.example.wbdvsp2101mianzhangserverjava.models;
//
//public class Widget {
//    private Long id;
//    private String type;
//    private Integer size;
//    private String text;
//
//    public String getTopicId() {
//        return topicId;
//    }
//
//    public void setTopicId(String topicId) {
//        this.topicId = topicId;
//    }
//
//    private String topicId;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
//
//    public Integer getSize() {
//        return size;
//    }
//
//    public void setSize(Integer size) {
//        this.size = size;
//    }
//
//    public String getText() {
//        return text;
//    }
//
//    public void setText(String text) {
//        this.text = text;
//    }
//
//    public Widget() {
//    }
//
//    public Widget(Long id, String topicId, String type, Integer size, String text) {
//        this.id = id;
//        this.topicId = topicId;
//        this.type = type;
//        this.size = size;
//        this.text = text;
//    }
//}





