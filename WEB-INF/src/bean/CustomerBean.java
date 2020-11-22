package bean;

import annotation.Metadata;
import annotation.Required;
import lombok.Data;

@Data
public class CustomerBean {

	@Required
	@Metadata( "顧客コード" )
	private String customerCode;

	@Required
	@Metadata( "顧客名" )
	private String CustomerName;

}
